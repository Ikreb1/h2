import { generateImage } from "./converter";
import { empty, createElement, makeAttribute } from "./helpers";

export default class Lecture {
    constructor() {
        this.container = document.querySelector('.lecture');
        this.url = '../lectures.json';
    }


    loadLecture(slug) {
        return fetch(this.url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Gat ekki sótt fyrirlestra');
                }
                return res.json();
            })
            .then((data) => {
                const found = data.lectures.find(i => i.slug === slug);
                if (!found) {
                    throw new Error('Fyrirlestur fannst ekki');
                }
                return found;
            });
    }

    addToPage(el) {
        this.container.appendChild(el);
    }

    renderData(data) {
        const headerElement = createElement("div", "", "header__fyrirlestur");

        const categoryElement = createElement("h3", data.category, "heading__category");
        headerElement.appendChild(categoryElement);

        const titleElement = createElement("h1", data.title, "heading__title");
        headerElement.appendChild(titleElement);

        const imageElement = generateImage(data.image, "", "heading__image");
        headerElement.appendChild(imageElement);

        this.addToPage(headerElement);
        this.renderContent(data.content);
    }

    renderImage(path, caption) {
        const imageEle = generateImage(path);
        const altAtt = makeAttribute("alt", caption);
        imageEle.setAttributeNode(altAtt);
        this.addToPage(imageEle);
    }

    renderVideo(video) {
        const videoElement = createElement("iframe");

        const srcAtt = makeAttribute("src", video);
        const frameborderAtt = makeAttribute("frameborder", "0");
        const allowfullscreenAtt = makeAttribute("allowfullscreen", "0");

        videoElement.setAttributeNode(srcAtt);
        videoElement.setAttributeNode(frameborderAtt);
        videoElement.setAttributeNode(allowfullscreenAtt);

        this.addToPage(videoElement);
    }

    renderText(text) {
        const textElement = createElement("p", text, "fyrirlestur__text");
        textElement.innerHTML = text;
        this.addToPage(textElement);
    }

    renderQuote(quote, author) {
        const quoteElement = createElement("blockquote", "", "fyrirlestur__quote");
        const textEle = createElement("p", quote, "fyirlestur__quote__text");
        const footerElement = createElement("footer", author, "fyrirlestur__quote__author");

        quoteElement.appendChild(textEle);
        quoteElement.appendChild(textEle);

        this.addToPage(quoteElement);

    }

    renderHeading(heading) {
        const headingElement = createElement("h2", heading, "fyrirlestur__chapterTitle");
        this.addToPage(headingElement);
    }

    renderList(list) {
        const listElement = createElement("ul");
        for(let i=0;i<list.length;i++) {
            let listItemElement = createElement("li", list[i]);
            listElement.appendChild(listItemElement);
        }
        this.addToPage(listElement);
    }

    renderCode(code) {
        const codeElement = createElement("code", code, "fyrirlestur__code");
        this.addToPage(codeElement);
    }

    renderContent(content) {
        for(let i=0;i<content.length;i++) {
            if(content[i].type === "youtube") {
                this.renderVideo(content[i].data);
            } else if (content[i].type === "text") {
                this.renderText(content[i].data);
            } else if (content[i].type === "quote") {
                this.renderQuote(content[i].data, content[i].attribute);
            } else if (content[i].type === "image") {
                this.renderImage(content[i].data, content[i].caption);
            } else if (content[i].type === "heading") {
                this.renderHeading(content[i].data);
            } else if (content[i].type === "list") {
                this.renderList(content[i].data);
            } else if (content[i].type === "code") {
                this.renderCode(content[i].data);
            } else {

            }
        }
    }

    load(){
        empty(this.container);
        const qs = new URLSearchParams(window.location.search);
        const slug = qs.get('slug');

        this.loadLecture(slug)
            .then((data) => this.renderData(data));
    }
}