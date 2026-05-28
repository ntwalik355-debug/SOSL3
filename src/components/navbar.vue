<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/logo.jpg.jpg" class="h-10 w-auto">
        
        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
            <li><router-link to="/" class="hover:text-yellow-300">HOME</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>
            <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
            <li><router-link to="/place" class="hover:text-yellow-300">places</router-link></li>
            
            <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Gallery<span> v </span></a>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a></li>
                </ul>
            </li>
             <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Destination<span> v </span></a>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Kigali</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">South</a></li>
                     <li><a href="#" class="block px-4 py-2 hover:bg-green-700">West</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">North </a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">East</a></li>
                </ul>
                </li>
            <li><router-link to="/contact" class="hover:text-yellow-300">Contact</router-link></li>
        </ul>
    </nav>
</template>