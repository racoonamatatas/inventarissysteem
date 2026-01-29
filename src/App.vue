<template>
    <div>
        <nav>
            <RouterLink :to="{name: 'inventory.overview'}">Overview</RouterLink>
            <RouterLink to="/add">Add</RouterLink>
            <RouterLink to="/order">Order</RouterLink>
        </nav>
    </div>
    <div>
        <main>
            <RouterView />
        </main>
    </div>
</template>
