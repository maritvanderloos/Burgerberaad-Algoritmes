<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import NextPage from '$lib/components/NextPage.svelte';
	import { lang } from '$lib/lang.svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const stored = localStorage.getItem('lang') as 'en' | 'nl' | null;
		if (stored === 'en' || stored === 'nl') {
			lang.current = stored;
		}
	});

	function setLang(l: 'en' | 'nl') {
		lang.current = l;
		localStorage.setItem('lang', l);
	}

	$effect(() => {
		document.documentElement.lang = lang.current;
	});
</script>

<div class="flex gap-8 h-screen md:flex-row flex-col">
	<Sidebar />
	<div class="flex-1 p-2 md:py-8 md:px-16 h-screen overflow-y-auto">
		{@render children()}
		<NextPage />
	</div>
</div>

<div class="fixed top-4 right-4 flex items-center gap-1 text-sm z-50">
	<button
		onclick={() => setLang('en')}
		class="transition-colors {lang.current === 'en' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}"
	>EN</button>
	<span class="text-gray-300 select-none">/</span>
	<button
		onclick={() => setLang('nl')}
		class="transition-colors {lang.current === 'nl' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}"
	>NL</button>
</div>
