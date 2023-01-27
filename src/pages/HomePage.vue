<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'HomePage',

    data() {
        return {
            store,
            arrayPosts: [],
            successPost: '',
        }
    },

    created() {
        this.axiosCall();
    },

    methods: {
        axiosCall() {
            axios.get(`${this.store.baseApiUrl}posts`).then((resp) => {
                this.successPost = resp.data.success;
                this.arrayPosts = resp.data.response;
                //console.log(this.successPost);
                console.log(this.arrayPosts);
            });
        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div>
            <RouterLink :to="{ name: 'second' }" class="btn btn-warning mb-5">vai alla second page</RouterLink>
        </div>
        <div class="row">
            <div class="card mb-4 py-3" v-for="(post, index) in arrayPosts" :key="index">
                <RouterLink class="sensitive" :to="{ name: 'single-post', params: { id: post.id } }">
                    <ul>
                        <li>
                            <h4>{{ post.name }}</h4>
                        </li>
                        <li>
                            <h5>{{ post.id }}</h5>
                        </li>
                        <li>
                            <p>
                                {{ post.text }}
                            </p>
                        </li>
                    </ul>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
ul {
    list-style: none;
}

.card {
    cursor: pointer;

    .sensitive {
        text-decoration: none;
        color: inherit;
    }
}
</style>