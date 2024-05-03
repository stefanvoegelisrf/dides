<template>
    <main id="container" @click="onContainerClick" class="h-screen max-h-screen overflow-hidden"
        :class="{ 'bg-tuscany': isHospitalSceneActive, 'bg-dark-gunmetal': !isHospitalSceneActive }">
        <div id="title"
            class="absolute xl:h-screen w-full xl:w-1/2 bottom-0 xl:top-0 left-0 xl:left-1/2 flex xl:flex-col flex-col-reverse items-center justify-center gap-4 xl:gap-16"
            :class="{ 'color-tuscany': !isHospitalSceneActive, 'color-dark-gunmetal': isHospitalSceneActive }">
            <h1 class="m-plus-1p-medium text-5xl xl:text-8xl">SAN JUNIPERO</h1>
            <div class="flex flex-row xl:flex-col items-center gap-2 xl:gap-8 text-center">
                <h2 class="m-plus-1p-regular">Black Mirror Series 3 Episode 4</h2>
                <h2 class="m-plus-1p-regular">Directed by Owen Harris</h2>
            </div>
        </div>
        <div id="image-container"
            class="rounded-full absolute top-1/3 xl:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:-left-56 overflow-hidden"
            :class="{ 'hospital-scene-active': isHospitalSceneActive, 'beach-scene-active': !isHospitalSceneActive }">
            <p class="nanum-myeongjo text-white absolute top-1/2 left-1/2 z-10 text-xl xl:text-4xl w-1/3 text-center"
                v-if="!isHospitalSceneActive">
                “If we really met, you wouldn't like me.”
            </p>
            <p class="nanum-myeongjo text-white absolute top-1/3 -translate-x-1/3 -translate-y-1/2 left-1/3 z-10 text-xl xl:text-4xl w-1/3 text-center"
                v-if="isHospitalSceneActive">
                “Hello Stupid, it’s good to see you.”</p>
            <div class="relative w-full h-full">
                <div class="circle absolute top-0 left-0 h-full w-full" v-for="n in 18"
                    :class="{ 'animation-active': !isHospitalSceneActive, 'animation-inactive': isHospitalSceneActive }">
                    <div class="relative h-full w-full">
                        <span
                            class="inner-circle absolute left-1/2 -translate-x-1/2 top-0 translate-y-1/2 w-12 h-12 xl:w-24 xl:h-24 bg-dark-gunmetal rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
let isHospitalSceneActive = ref(false);

const onContainerClick = () => {
    console.log('onContainerClick')
    isHospitalSceneActive.value = !isHospitalSceneActive.value;
    console.log(isHospitalSceneActive.value)
};
</script>
<style scoped>
main {
    --color-dark-gunmetal: #1D2734;
    --color-tuscany: #BD98A0;
    --circle-amount: 18;
    --animation-duration: 1.25s;
    transition: background-color 1s;
}

#title {
    transition: color 1s;
}

#image-container {
    height: 120vmin;
    width: 120vmin;
    box-shadow: 0 0 1rem .25rem rgba(255, 255, 255, .1);
}

.animation-active {
    animation-iteration-count: infinite;
}

.animation-inactive {
    animation-iteration-count: 1;
}

#image-container::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
}

.beach-scene-active::before {
    background-position: 35%;
    background-image: url('/images/meet-me/vlcsnap-2024-05-01-15h22m58s753.png');
}

.hospital-scene-active::before {
    background-position: 50%;
    background-image: url('/images/meet-me/vlcsnap-2024-05-01-14h45m05s690.png');
}

.circle {
    animation-duration: var(--animation-duration);
    animation-name: pulse;
    animation-timing-function: linear;
    opacity: 0;
}

.inner-circle {
    box-shadow: 0 0 .25rem .25rem rgba(255, 255, 255, .1);
}

.circle:nth-child(10) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 1);
}

.circle:nth-child(11),
.circle:nth-child(9) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 3);
}

.circle:nth-child(12),
.circle:nth-child(8) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 5);
}

.circle:nth-child(13),
.circle:nth-child(7) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 7);
}

.circle:nth-child(14),
.circle:nth-child(6) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 9);
}

.circle:nth-child(15),
.circle:nth-child(5) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 11);
}

.circle:nth-child(16),
.circle:nth-child(4) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 13);
}

.circle:nth-child(17),
.circle:nth-child(3) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 15);
}

.circle:nth-child(18),
.circle:nth-child(2) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 17);
}

.circle:nth-child(1) {
    animation-delay: calc(var(--animation-duration) / var(--circle-amount) * 18);
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

@keyframes pulse {

    0%,
    25%,
    75%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>