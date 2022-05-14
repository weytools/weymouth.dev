// data
import projectList from "../data/projects"
// components
import * as React from "react"
import Layout from "../components/layout"

function getMarkup(desc){
  return {__html: desc}
}


// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main className="mw max-w-screen-lg mx-auto">
        <section id="intro" className="space-y-12">
          <h1 className="text-2xl">Portfolio of Isaac Weymouth</h1>
          <p className="text-base">A web & software engineer</p>
        </section>

        <section id="projects" className="space-y-12">
          <h2 className="text-2xl">Projects</h2>
          <div className="grid grid-cols-4 gap-x-8 gap-y-10">
            {projectList.map(project => (
              <article className="bg-slate-500 text-white shadow-md rounded-md col-span-2 p-12 bg-opacity-50">
                <img className="h-24 rounded-sm object-cover object-center bg-nicepink bg-opacity-50"  alt={project.imageAlt}/>
                <h3 className="text-xl">{project.title}</h3>
                <aside className="text-sm">{project.subtitle}</aside>
                <p className="text-base" dangerouslySetInnerHTML={getMarkup(project.description)}></p>
                <footer className="bg-slate-700 text-sm">{project.footer}</footer>

              </article>
            ))}
          </div>
        </section>

        <section id="about" className="space-y-12">
          <h2 className="text-2xl">Portfolio of Isaac Weymouth</h2>
          <p className="text-base">A web & software engineer</p>
        </section>

        <section id="contact" className="space-y-12">
          <h2 className="text-2xl">Portfolio of Isaac Weymouth</h2>
          <p className="text-base">A web & software engineer</p>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
