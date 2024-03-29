﻿
module.exports = `
<div id="{id}" class="definejs-Dialog {cssClass}" style="{style} display: none;">
    <template name="header" placeholder="header">
        <header id="{headerId}">
            {title}
        </header>
    </template>

    <template name="content" placeholder="content">
        <article id="{articleId}" class="{noHeader} {noFooter}">
            <div id="{contentId}">{content}</div>
        </article>
    </template>

    <template name="footer" placeholder="footer">
        <footer id="{footerId}" class="Buttons-{count}">
            <template name="button" placeholder="buttons">
                <button data-index="{index}" class="{cssClass}" style="{style}">{text}</button>
            </template>
        </footer>
    </template>
</div>
`;
