import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"
import { myTheme } from "theme"
import { scheduledPublishing } from "@sanity/scheduled-publishing"
import StudioNavbar from "components/StudioNavbar"
import Logo from "components/Logo"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
    basePath: "/studio",
    name: "KoenSchipper_Content_Studio",
    title: "KoenSchipper Content Studio",
    projectId,
    dataset,
    plugins: [deskTool(), visionTool(), scheduledPublishing()],
    schema: {
        types: schemaTypes
    },
    studio: {
        components: {
            logo: Logo,
            navbar: StudioNavbar
        }
    },
    theme: myTheme
})
