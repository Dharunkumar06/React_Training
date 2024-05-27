

export function Lanpage()
{
   const navtoLogin = (e) => {
        e.preventDefault();
        window.location.href = '/login';
    }

    const navtoRegister = (e) => {
        e.preventDefault();
        window.location.href = '/signup';
    }

    return(
       <>
        <div className="h-screen flex p-3 items-center justify-center bg-gradient-to-r from-teal-400 to-yellow-200">
        <div className="border-16 border-purple-800 py-12 px-6 space-y-10 bg-gradient-to-r from-teal-200 to-teal-500">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">Lanning Page</h1>
                    
                    <div className="flex space-x-2 mt-4">
                        <button className="bg-blue-500 text-white p-3 shadow-md rounded-md" onClick={navtoLogin}>Login</button>
                        <button className="bg-pink-800 text-white p-3 shadow-md rounded-md" onClick={navtoRegister}>Sign up</button>
                    </div>
                </div>
            </div>
       </>
    );
}