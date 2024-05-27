

export function Signup()
{
   const navtoLogin = (e) => {
        e.preventDefault();
        window.location.href = '/login';
   }


    return(
       <>
        <div className="h-screen flex p-3 items-center justify-center bg-gradient-to-r from-blue-200 via-purple-500 to-pink-500 ...">
                <div className="border-4 border-purple-800 p-6 space-y-10 bg-gradient-to-r from-pink-300 to-blue-500 ...">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">Register page</h1>
                    
                    <div className="flex flex-col">
                        <label className="text-2xl font-bold mb-5">Username:</label>
                        <input type="text" className="block w-full p-3 shadow-md rounded-sm" required />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="text-2xl font-bold mb-5">Password:</label>
                        <input type="password" className="block w-full p-3 shadow-md rounded-sm" required />
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                        <button className="bg-pink-800 text-white p-3 shadow-md rounded-md">Sign up</button>
                        <button className="bg-blue-500 text-white p-3 shadow-md rounded-md" onClick={navtoLogin}>Sign in</button>
                    </div>
                </div>
            </div>
       </>
    );
}