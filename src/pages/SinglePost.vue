<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SinglePost',

    data() {
        return {
            store,
            post: {},
            missingPost: '',
        }
    },

    computed: {
        tags() {
            return this.post.tags ? this.post.tags.name : 'Nessuna tags';
        }
    },

    created() {
        this.axiosCall();
    },

    methods: {
        axiosCall() {
            const id = this.$route.params.id;
            //console.log(id);
            axios.get(`${this.store.baseApiUrl}posts/${id}`).then(resp => {
                console.log(resp);
                resp = resp.data;
                if (resp.success) {
                    this.post = resp.response;
                    //console.log(this.post);
                } else {
                    this.missingPost = resp.response;
                }
            });
        }
    },
}
</script>

<template>

    <section class="py-5">
        <div class="mb-4 text-center">
            <RouterLink :to="{ name: 'home' }" class="btn btn-warning">
                torna all' home
            </RouterLink>
        </div>
        <h2 class="text-center" v-if="missingPost != ''">
            {{ missingPost }}
        </h2>
        <div v-else class="container">
            <div class="row justify-content-center">
                <div class="col card p-4">
                    <h2 class="text-center mb-2">
                        {{ post.name }}
                    </h2>
                    <h4 class="mb-4">
                        {{ post.id }}
                    </h4>
                    <p>
                        {{ post.text }}
                    </p>
                    <ul>
                        <li v-for="(tag, index) in post.tags" :key="index">
                            tag: {{ tag.name }}
                        </li>
                    </ul>
                    <h6>
                        scritto da: {{ post.author.name }}
                    </h6>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>

</style>