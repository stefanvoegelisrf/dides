<template>
    <main class="flex flex-col items-center h-screen bg-no-repeat bg-center bg-cover">
        <section id="header" class="w-max">
            <h1 class="m-plus-1p-medium text-8xl p-8">San Junipero</h1>
        </section>
        <section id="navigation" class="w-max grid grid-cols-2 grid-rows-1">
            <RouterLink to="/girlfriend-in-a-coma" class="p-8">Girlfriend in a coma</RouterLink>
            <RouterLink to="/meet-me" class="p-8">Meet me</RouterLink>
        </section>
    </main>
</template>
<style scoped>
main {
    background-image: url('/images/ready/vlcsnap-2024-05-01-15h19m09s485.png');
}
</style>