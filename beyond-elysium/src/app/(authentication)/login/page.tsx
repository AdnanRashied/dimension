import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className="flex flex-wrap w-full">
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                    <a href="#" className="p-4 text-xl font-bold text-white bg-black">Dimension</a>
                </div>

        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Welcome.</p>
                <form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                        </div>
    
                        <div className="flex flex-col pt-4">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <input type="password" id="password" placeholder="Password" className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                        </div>
    
                        <input type="submit" value="Log In" className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"/>
                </form>
                
                    <div className="pt-12 pb-12 text-center">
                        <p> Don&apos;t have an account?<a href="register.html" className="font-semibold underline">Register here.</a></p>
                    </div>
                </div>
            </div>
        <div className="w-1/2 shadow-2xl">
        <Image className="hidden object-cover w-full h-screen md:block" alt="fg" src="https://source.unsplash.com/IXUM4cJynP0"  width={700}
        height={700}/>
        </div>
    </div>

    )
}

export default LoginPage;