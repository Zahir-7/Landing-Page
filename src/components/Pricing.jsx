import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
const Pricing = () => {
  return (
    <div className="mt-20">
        <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide font-medium">Pricing</h1>
        <div className="flex flex-wrap">
            {
                pricingOptions.map((option,index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-3xl sm:text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="text-xl sm:text-2xl bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-4 ml-2"> (Most Popular)</span>
                                )}
                            </p>
                            <p className="mb-8 text-4xl sm:text-5xl font-medium mt-6 ">
                                <span>{option.price}</span>
                                <span className="text-neutral-400 tracking-tight text-xl sm:text-2xl">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature,index)=>(
                                    <li key={index} className="mt-8 flex gap-3 items-center">
                                        <CheckCircle2 className="text-green-500"/> 
                                        <span>{feature}</span>
                                    </li>
                                    
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full mt-20 p-5 tracking-tight border h-12 text-xl hover:bg-orange-900 cursor-pointer border-orange-900 rounded-lg transition duration-200 font-medium">Subscribe</a>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Pricing
