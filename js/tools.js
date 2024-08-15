const tools = ['html', 'css', 'javascript', 'git', 'react', 'tailwind']
const imgsTools = ['/assets/html.svg', '/assets/css.svg', '/assets/javascript.svg', '/assets/git.svg', '/assets/react.svg', '/assets/tailwindcss.svg']
const toolsContent = document.querySelector('.toll-content')


const criaTool = () => {
    for (let i in tools)  {
        // Cria toll
        const tool = document.createElement('div')
        tool.classList.add('toll')
        toolsContent.appendChild(tool)

        // Add img 
        const img = document.createElement('img')
        img.classList.add('toll-img')
        img.src = imgsTools[i]
        tool.appendChild(img) 

        // Add text
        const p = document.createElement('p')
        p.innerText = tools[i]
        tool.appendChild(p)
    }
}

criaTool()