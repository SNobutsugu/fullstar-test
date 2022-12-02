<template>
    {{message}}
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const message = ref<string>("Two");
        return {
            message
        };
    }
});
</script>
