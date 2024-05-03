<template>
    <main class="h-screen max-h-screen bg-dark-gunmetal overflow-hidden">
        <div class="absolute xl:h-screen w-full xl:w-1/2 bottom-0 xl:top-0 left-0 xl:left-1/2 flex flex-col items-center justify-center gap-16">
            <h1 class="m-plus-1p-medium color-tuscany text-4xl xl:text-8xl">SAN JUNIPERO</h1>
            <div class="flex flex-col items-center gap-8">
                <h2 class="m-plus-1p-regular color-tuscany">Black Mirror Series 3, Episode 4</h2>
                <h2 class="m-plus-1p-regular color-tuscany">Directed by Owen Harris</h2>
            </div>
        </div>
        <div id="beach-scene" class="rounded-full absolute top-1/3 xl:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:-left-56 overflow-hidden">
            <p class="nanum-myeongjo text-white absolute top-1/2 left-1/2 z-10 text-2xl xl:text-4xl w-64 text-center">
                “If we really met, you wouldn't like me.”</p>
            <div class="relative w-full h-full">
                <div class="circle absolute top-0 left-0 h-full w-full" v-for="n in 18">
                    <div class="relative h-full w-full">
                        <span
                            class="absolute left-1/2 -translate-x-1/2 top-0 translate-y-1/2 w-12 h-12 xl:w-24 xl:h-24 bg-dark-gunmetal rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
main {
    --color-dark-gunmetal: #1D2734;
    --color-tuscany: #BD98A0;
    --circle-amount:18;
    --animation-duration:1.5s;
}

#beach-scene {
    background-image: url('/images/meet-me/vlcsnap-2024-05-01-15h22m58s753.png');
    background-size: cover;
    background-position: 35%;
    height: 120vmin;
    width: 120vmin;
}

.circle{
    animation-name: pulse;
    animation-duration: var(--animation-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.circle:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 1);
}

.circle:nth-child(2) {
    transform: rotate(20deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 2);
}

.circle:nth-child(3) {
    transform: rotate(40deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 3);
}

.circle:nth-child(4) {
    transform: rotate(60deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 4);
}

.circle:nth-child(5) {
    transform: rotate(80deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 5);
}

.circle:nth-child(6) {
    transform: rotate(100deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 6);
}

.circle:nth-child(7) {
    transform: rotate(120deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 7);
}

.circle:nth-child(8) {
    transform: rotate(140deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 8);
}

.circle:nth-child(9) {
    transform: rotate(160deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 9);
}

.circle:nth-child(10) {
    transform: rotate(180deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 10);
}

.circle:nth-child(11) {
    transform: rotate(200deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 11);
}

.circle:nth-child(12) {
    transform: rotate(220deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 12);
}

.circle:nth-child(13) {
    transform: rotate(240deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 13);
}

.circle:nth-child(14) {
    transform: rotate(260deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 14);
}

.circle:nth-child(15) {
    transform: rotate(280deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 15);
}

.circle:nth-child(16) {
    transform: rotate(300deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 16);
}

.circle:nth-child(17) {
    transform: rotate(320deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 17);
}

.circle:nth-child(18) {
    transform: rotate(340deg);
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 18);
}

.color-dark-gunmetal {
    color: var(--color-dark-gunmetal);
}

.color-tuscany {
    color: var(--color-tuscany);
}

.bg-dark-gunmetal {
    background-color: var(--color-dark-gunmetal);
}

.bg-tuscany {
    background-color: var(--color-tuscany);
}

@keyframes pulse {
    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>