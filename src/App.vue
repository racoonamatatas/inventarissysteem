<template>
    <div>
        <nav>
            <RouterLink to="/overview">Overview</RouterLink>
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
