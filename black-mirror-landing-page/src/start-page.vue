<template>
    <main class="flex flex-col items-center h-screen bg-no-repeat bg-center bg-cover">
        <section id="header" class="w-max mt-2">
            <h1 class="lobster-regular text-5xl xl:text-8xl p-8 color-midnight-green">San Junipero</h1>
        </section>
        <section id="navigation" class="w-max grid xl:grid-cols-2 xl:grid-rows-1 grid-cols-1 grid-rows-2 text-center justify-center items-center h-full">
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
</style>