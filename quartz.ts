import { componentRegistry } from "./quartz/components/registry"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// 近作只列文章。首頁與 404 仍可開啟，只是不進目錄。
componentRegistry.setOptionOverrides("@quartz-community/recent-notes", {
  filter: (page: { slug?: string }) => {
    const slug = page.slug ?? ""
    return slug !== "index" && slug !== "404"
  },
} as Record<string, unknown>)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
