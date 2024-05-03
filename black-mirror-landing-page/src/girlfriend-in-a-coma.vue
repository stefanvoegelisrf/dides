<template>
    <main class="overflow-hidden h-screen max-h-screen bg-no-repeat bg-cover bg-center">
        <div class="absolute top-0 left-0 w-full h-full bg-white pulse-opacity"></div>
        <p class="absolute top-40 left-1/2 -translate-x-1/2 nanum-myeongjo text-xl xl:text-4xl w-max text-white">“Hello,
            stupid. It’s
            good to see you.”</p>
        <h1
            class="absolute left-1/2 -translate-x-1/2 bottom-4 xl:bottom-6 leading-none text-5xl xl:text-8xl m-plus-1p-medium w-max">
            SAN JUNIPERO</h1>
        <h2 class="absolute text-xs xl:text-base bottom-16 xl:bottom-28 left-4 xl:left-1/3 m-plus-1p-regular">Black
            Mirror Series 3 Episode 4</h2>
        <h2 class="absolute text-xs xl:text-base bottom-16 xl:bottom-28 right-4 xl:right-1/3 m-plus-1p-regular">Directed
            by Owen Harris</h2>
    </main>
</template>
<style scoped>

main{
    background-image: url('/images/meet-me/vlcsnap-2024-05-01-14h44m07s901.png');
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 0.2;
    }
}

.pulse-opacity{
    animation: pulse 4s infinite;
}
</style>