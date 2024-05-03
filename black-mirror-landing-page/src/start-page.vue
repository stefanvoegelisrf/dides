<template>
    <main class="flex flex-col items-center h-screen bg-no-repeat bg-center bg-cover">
        <section id="header" class="w-max">
            <h1 class="m-plus-1p-medium text-5xl xl:text-8xl p-8 color-midnight-green neon-pulsating-text bg-midnight-green mt-2 rounded-lg">San Junipero</h1>
        </section>
        <section id="navigation" class="w-max grid xl:grid-cols-2 xl:grid-rows-1 grid-cols-1 grid-rows-2 text-center">
            <RouterLink to="/girlfriend-in-a-coma" class="p-8 nanum-myeongjo text-xl text-white">Girlfriend in a coma</RouterLink>
            <RouterLink to="/meet-me" class="p-8 nanum-myeongjo text-xl text-white">Meet me</RouterLink>
        </section>
    </main>
</template>
<style scoped>
main {
    background-image: url('/images/ready/vlcsnap-2024-05-01-15h19m09s485.png');
    --color-midnight-green: #024959;
    --color-keppel:#3CA6A6;
}

.color-midnight-green {
    color: var(--color-midnight-green);
}

.bg-midnight-green {
    background-color: var(--color-midnight-green);
}

.neon-flickering-text {
  animation: flicker 1.5s infinite alternate;
}

.neon-pulsating-text {
  animation: pulsate 2.5s infinite alternate;
}

/* Flickering animation */
@keyframes flicker {
    
  0%, 18%, 22%, 25%, 53%, 57%, 100% {

      text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px var(--color-keppel),
      0 0 80px var(--color-keppel),
      0 0 90px var(--color-keppel),
      0 0 100px var(--color-keppel),
      0 0 150px var(--color-keppel);
  
  }
  
  20%, 24%, 55% {        
      text-shadow: none;
  }    
}

@keyframes pulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px var(--color-keppel),
      0 0 80px var(--color-keppel),
      0 0 90px var(--color-keppel),
      0 0 100px var(--color-keppel),
      0 0 150px var(--color-keppel);
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px var(--color-keppel),
      0 0 45px var(--color-keppel),
      0 0 55px var(--color-keppel),
      0 0 70px var(--color-keppel),
      0 0 80px var(--color-keppel);
  }
}
</style>