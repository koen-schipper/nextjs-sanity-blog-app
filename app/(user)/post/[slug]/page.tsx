import { client } from "../../../../lib/sanity.client"
import { groq } from "next-sanity"
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "components/RichTextComponents"

type Props = {
    params: {
        slug: string
    }
}

export default async function Post({ params: { slug } }: Props) {
    const query = groq`
        *[_type == "post" && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query, { slug })

    return (
        <article className='px-10 pb-28'>
            <section className='space-y-2 border border-[#0072bc] text-white'>
                <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
                    <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                        <Image
                            className='object-cover object-center mx-auto'
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                        />
                    </div>
                    <section className='p-5 bg-[#1bb1e7] w-full'>
                        <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                            <div>
                                <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString(undefined, {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>
                            </div>
                            <div className='flex items-start space-x-2 content-baseline'>
                                <Image
                                    className='rounded-full'
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                />
                                <div className='w-64'>
                                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                                    <div className='line-clamp-5 text-sm'>
                                        <PortableText
                                            value={post.author.bio}
                                            components={RichTextComponents}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='italic pt-10'>{post.description}</h2>
                            <div className='flex items-center justify-end gap-x-1'>
                                {post.categories.map(category => (
                                    <p
                                        key={category._id}
                                        className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                                    >
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className='pt-10'>
                <PortableText value={post.body} components={RichTextComponents} />
            </section>
        </article>
    )
}
