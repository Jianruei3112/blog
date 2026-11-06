import test from "node:test"
import assert from "node:assert"
import { filterListedPages } from "@quartz-community/recent-notes"
import { GlobalConfiguration } from "../../cfg"
import { BuildCtx } from "../../util/ctx"
import { FilePath, FullSlug } from "../../util/path"
import { ProcessedContent, defaultProcessedContent } from "../vfile"
import { NotFoundPageType } from "./404"

test("generated 404 page is omitted from listing surfaces and still titled Not Found", () => {
  const pages = NotFoundPageType().generate!({
    content: [] as ProcessedContent[],
    cfg: { locale: "en-US" } as GlobalConfiguration,
    ctx: {} as BuildCtx,
  })

  assert.strictEqual(pages.length, 1)
  const page = pages[0]
  assert.strictEqual(page.slug, "404")
  assert.strictEqual(page.title, "Not Found")
  assert.strictEqual(page.data.unlisted, true)

  // PageTypeDispatcher copies generate() data onto the file passed to components.
  const [, rebuilt] = defaultProcessedContent({
    slug: page.slug as FullSlug,
    relativePath: "404.md" as FilePath,
    frontmatter: { title: page.title, tags: [] },
    ...page.data,
  })
  const article = {
    slug: "首帖",
    frontmatter: { title: "首帖", tags: [] as string[] },
  }
  const listed = filterListedPages([rebuilt.data, article])

  assert.deepStrictEqual(
    listed.map((file) => file.slug),
    ["首帖"],
  )
})
