<script>
export default {
    name: 'SecondPage',
}
</script>

<template>
    <div class="container">
        <div class="row py-5">
            <h2 class="mb-4">
                CIAO SONO SECOND PAGE
            </h2>
            <div>
                <RouterLink :to="{ name: 'home' }" class="btn btn-warning">vai alla first page</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>