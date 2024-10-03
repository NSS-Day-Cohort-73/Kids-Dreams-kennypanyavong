import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li class="kid-item"
                     data-id="${child.id}" 
                     data-type="${child.name}" 
                     data-wish="${child.wish}">
                     ${child.name}
                </li>`
    }

    html += "</ol>"
    return html
}

