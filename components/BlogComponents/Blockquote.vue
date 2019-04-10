<template>
    <div class="block-quote">
        <p class="quote"> {{ quote }}</p>
        <p class="author"> {{author}}</p>
    </div>
</template>

<script>
    export default {
        props: ["quote", "author"]
    }
</script>

<style scoped>
    .block-quote {
        font-style: italic;
    }
</style>