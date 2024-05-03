<template>
    <main class="h-screen bg-dark-gunmetal">
        <div id="beach-scene" class="rounded-full absolute top-1/2 -translate-y-1/2 -left-40">
            <div class="relative w-full h-full">
                <div class="circle absolute top-0 left-0  h-full w-full" v-for="n in 18">
                    <div class="relative h-full w-full">
                        <span
                            class="absolute left-1/2 -translate-x-1/2 top-0 translate-y-1/2 w-24 h-24 bg-dark-gunmetal rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
        <p class="nanum-myeongjo text-white">“If we really met, you wouldn't like me.”</p>
        <h1 class="m-plus-1p-medium color-tuscany">SAN JUNIPERO</h1>
        <h2 class="m-plus-1p-regular color-tuscany">Black Mirror Series 3, Episode 4</h2>
        <h2 class="m-plus-1p-regular color-tuscany">Directed by Owen Harris</h2>
    </main>
</template>
<style scoped>
main {
    --color-dark-gunmetal: #1D2734;
    --color-tuscany: #BD98A0;
}

#beach-scene {
    background-image: url('/images/meet-me/vlcsnap-2024-05-01-15h22m58s753.png');
    background-size: cover;
    background-position: 35%;
    height: 120vmin;
    width: 120vmin;
}

.circle:nth-child(1) {
    transform: rotate(0deg);
}

.circle:nth-child(2) {
    transform: rotate(20deg);
}

.circle:nth-child(3) {
    transform: rotate(40deg);
}

.circle:nth-child(4) {
    transform: rotate(60deg);
}

.circle:nth-child(5) {
    transform: rotate(80deg);
}

.circle:nth-child(6) {
    transform: rotate(100deg);
}

.circle:nth-child(7) {
    transform: rotate(120deg);
}

.circle:nth-child(8) {
    transform: rotate(140deg);
}

.circle:nth-child(9) {
    transform: rotate(160deg);
}

.circle:nth-child(10) {
    transform: rotate(180deg);
}

.circle:nth-child(11) {
    transform: rotate(200deg);
}

.circle:nth-child(12) {
    transform: rotate(220deg);
}

.circle:nth-child(13) {
    transform: rotate(240deg);
}

.circle:nth-child(14) {
    transform: rotate(260deg);
}

.circle:nth-child(15) {
    transform: rotate(280deg);
}

.circle:nth-child(16) {
    transform: rotate(300deg);
}

.circle:nth-child(17) {
    transform: rotate(320deg);
}

.circle:nth-child(18) {
    transform: rotate(340deg);
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
</style>