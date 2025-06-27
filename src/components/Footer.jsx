import { resourcesLinks, platformLinks, communityLinks } from "../constants"
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <div>
                <h3 className="text-xl font-semibold mb-5">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-5">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-5">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-10 text-sm text-neutral-500">CopyRight &copy; VirtualR | All Rights Reserved 2025</div>
    </footer>
  )
}

export default Footer
