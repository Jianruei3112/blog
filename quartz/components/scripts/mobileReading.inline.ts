const mobileReadingQuery = window.matchMedia("(max-width: 800px)")

function collapseMobileToc() {
  if (!mobileReadingQuery.matches) return
  for (const header of document.querySelectorAll<HTMLElement>(".toc > .toc-header")) {
    if (header.classList.contains("collapsed")) continue
    header.classList.add("collapsed")
    header.setAttribute("aria-expanded", "false")
    const content = header.nextElementSibling
    if (content) content.classList.add("collapsed")
  }
}

document.addEventListener("nav", collapseMobileToc)
collapseMobileToc()

export default ""
