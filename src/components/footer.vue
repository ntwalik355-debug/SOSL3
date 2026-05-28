<template>

    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        
        
        <div class="flex flex-wrap justify-between gap-8">
            <!--this is footer-->
            <div>
            <h3 class="text-yellow-300 font-bold text-ig mt-3">TEMBERA RWANDA</h3>
            <p class="text-sm text-green-200">discover the beauty of the land of thousand hills</p>
            </div>
        
        <!-- quick link -->
         <div>
            <h4 class="text-lg font-bold text-yellow-300 mt-3">quick link</h4>
            <ul class="text-sm text-green-200">
                <li><RouterLink to='/home' class="hover:text-yellow-300">home</RouterLink></li>
                <li><RouterLink to='/about' class="hover:text-yellow-300">about</RouterLink></li>
                <li><RouterLink to='/gallery' class="hover:text-yellow-300">gallery</RouterLink></li>
                <li><RouterLink to='/destination' class="hover:text-yellow-300">destination</RouterLink></li>
                <li><RouterLink to='/places' class="hover:text-yellow-300">places</RouterLink></li>
            </ul>

         </div>
         <!-- destinations -->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">destinations</h3>
            <ul class="text-sm text-green-200">
                <li><RouterLink to='/' class="hover:text-yellow-300">northern</RouterLink></li>
                <li><RouterLink to='/southern' class="hover:text-yellow-300">southern</RouterLink></li>
                <li><RouterLink to='/eastern' class="hover:text-yellow-300">eastern</RouterLink></li>
                <li><RouterLink to='/kigali' class="hover:text-yellow-300">kigali</RouterLink></li>
                <li><RouterLink to='/western' class="hover:text-yellow-300">western</RouterLink></li>
                
            </ul>

         </div>
         <!-- contact info -->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">contact info</h3>
            <ul class="space-y-2">
                <li>ahantunyaburanga@gmail.com</li>
                <il>0784645372</il>
                <il>kagugu kigali Rwanda</il>
            </ul>
         </div>
         <</div>
         <!-- cpyright -->
         <div class="border-t text-sm px-2 py-2">

<p class="text-center">&copy;NTWALI2026 VISIT RWANDA</p>

         </div>
          
    </footer>
</template>