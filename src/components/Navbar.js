import brlogo from '..//images/br-logo.png';
import { AppBar, Toolbar, IconButton, Typography, } from '@mui/material';

export default function NavBar() {
    return (
        <AppBar position="sticky" sx={{ bgcolor: "#FAFAFA" }} >
            <Toolbar variant="dense">
                <img src={brlogo} alt="brlogo" />
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    
                </IconButton>
                <Typography variant="h6" color="black" component="div">
                Photos
                </Typography>
            </Toolbar>
        </AppBar>
        // <nav className="bg-primary w-full font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6">
        //     <div className='container flex flex-wrap justify-between items-center mx-full max-w-none'>
        //         <SiteIcon/>
        //         <div className='mb-2 sm:mb-0 mr-auto'>
        //             <ul className='flex'>
        //                 <li>
        //                     <a className='block px-2 text-2xl no-underline text-grey-darkest hover:text-blue-dark pt-1' href="/tournament">tournament</a>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className='mb-2 sm:mb-0 ml-auto'>
        //             <ul className='flex'>
        //                 <li>
        //                     <form class="flex items-center">   
        //                         <label for="simple-search" class="sr-only">Search</label>
        //                         <div class="relative w-full">
        //                             <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        //                                 <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        //                             </div>
        //                             <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        //                         </div>
        //                         <button type="submit" class="p-2.5 mr-8 text-sm font-medium text-white bg-secondary rounded-lg border border-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //                             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        //                             <span class="sr-only">Search</span>
        //                         </button>
        //                     </form>
        //                 </li>
        //                 <li>
        //                     <button className='bg-secondary hover:bg-blue-700 text-white font-bold pb-2 rounded'>
        //                         <a className='block px-2 text-2xl no-underline text-grey-darkest hover:text-blue-dark pt-1' href="/signup">sign up</a>
        //                     </button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}