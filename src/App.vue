<template>
    <div>
        <nav>
            <RouterLink to="/overview">Overview</RouterLink>
            <RouterLink to="/add">Add</RouterLink>
        </nav>
    </div>
    <div>
        <main>
            <RouterView />
        </main>
    </div>
</template>
