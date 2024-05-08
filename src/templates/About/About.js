import h from "hyperscript";

export const About = h(
  "section.about#sectionAbout",[
    h("p.about--name.subtitle","ABOUT"),
    h("article.about--times",[
      h("p.about--times--p","Horario"),
      h("p.about--times--p","Donde"),
      h("p.about--times--p","Enlace Maps")
    ]),
    h("picture.about--picture-cont",[
      h("img.about--picture-cont--img")
    ])
  ]
)