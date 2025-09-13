<template>
    <div>
        <List :tableName="'kayitlar'" />
    </div>
</template>

<script>
import List from '@/components/List.vue'

export default{
    components: {List},
}
</script>
