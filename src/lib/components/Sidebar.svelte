<script lang="ts">
	import { page } from '$app/stores';
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	type LabelMap = Record<Lang, string>;
	type DirectLink = { href: string; label: LabelMap; sublinks?: never };
	type LinkGroup = { href?: never; label: LabelMap; sublinks: { href: string; label: LabelMap }[] };

	const navLinks: Array<DirectLink | LinkGroup> = [
		{
			href: '/over/burgerberaad',
			label: { en: 'About the burgerberaad', nl: 'Over het burgerberaad' }
		},
		{
			label: { en: '', nl: '' },
			sublinks: [
				{
					href: '/over/algoritmen',
					label: { en: 'What are algorithms?', nl: 'Wat zijn algoritmes?' }
				},
				{
					href: '/over/hoe-werken',
					label: { en: 'How do algorithms work?', nl: 'Hoe werken algoritmes?' }
				},
				{
					href: '/over/overheid-gebruik',
					label: {
						en: 'How does the Dutch government use algorithms?',
						nl: 'Hoe gebruikt de Nederlandse overheid algoritmes?'
					}
				},
				{
					href: '/over/voor-en-nadelen',
					label: {
						en: 'What are the strengths and weaknesses of algorithms?',
						nl: 'Wat zijn de sterke en zwakke punten van algoritmes?'
					}
				},
				{
					href: '/over/jouw-data',
					label: {
						en: 'What data does the government have about me?',
						nl: 'Welke data heeft de overheid over mij?'
					}
				}
			]
		},
		{ href: '/algoritme-kaart', label: { en: 'Algorithm map', nl: 'Algoritmekaart' } },
		{ href: '/vragen', label: { en: 'Questions', nl: 'Vragen' } },
		{ href: '/bijeenkomsten', label: { en: 'Sessions', nl: 'Bijeenkomsten' } },
		{ href: '/wat-nu', label: { en: 'What now?', nl: 'Wat nu?' } }
	];

	let menuOpen = $state(false);

	$effect(() => {
		$page.url.pathname;
		menuOpen = false;
	});
</script>

<!-- Mobile top bar -->
<div class="flex items-center justify-between bg-white px-4 py-3 shadow-sm md:hidden">
	<a href="/over/burgerberaad" class="block w-12">
		<img src="/hand.png" alt="Algoritmen & de Overheid" />
	</a>
	<button
		onclick={() => (menuOpen = !menuOpen)}
		class="p-2 text-gray-700"
		aria-label={menuOpen ? 'Close menu' : 'Open menu'}
	>
		{#if menuOpen}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
				<path d="M18 6 6 18M6 6l12 12" />
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		{/if}
	</button>
</div>

<!-- Mobile nav overlay -->
{#if menuOpen}
	<nav class="fixed inset-0 z-40 overflow-y-auto bg-white px-6 pt-20 pb-8 md:hidden">
		<ul class="flex flex-col gap-5 text-base">
			{#each navLinks as link}
				{#if link.href}
					<li>
						<a
							href={link.href}
							class="block font-medium hover:text-blue-600 {$page.url.pathname === link.href ? 'text-blue-600' : ''}"
						>
							{link.label[lang.current]}
						</a>
					</li>
				{/if}
				{#if link.sublinks}
					{#each link.sublinks as sublink}
						<li class="pl-4">
							<a
								href={sublink.href}
								class="italic text-gray-700 hover:text-blue-600 {$page.url.pathname === sublink.href ? 'text-blue-600' : ''}"
							>
								{sublink.label[lang.current]}
							</a>
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</nav>
{/if}

<!-- Desktop sidebar -->
<aside class="hidden h-screen w-52 shrink-0 flex-col justify-between bg-white px-4 py-6 md:flex">
	<div class="flex flex-col items-start gap-2">
		<div class="max-w-[480px]">
			<img src="/hand.png" alt="Algoritmen & de Overheid" width="500" height="500" />
		</div>

		<nav class="mt-2 flex flex-col gap-4 px-2 text-sm">
			{#each navLinks as link}
				<div>
					{#if link.href}
						<a
							href={link.href}
							class="block hover:text-blue-600 transition-colors {$page.url.pathname === link.href ? 'text-blue-600' : ''}"
						>
							{link.label[lang.current]}
						</a>
					{/if}
					{#if link.sublinks}
						<ul class="mt-2 flex flex-col gap-2">
							{#each link.sublinks as sublink}
								<li>
									<a
										href={sublink.href}
										class="italic text-gray-800 hover:text-blue-600 transition-colors {$page.url.pathname === sublink.href ? 'text-blue-600' : ''}"
									>
										{sublink.label[lang.current]}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</nav>
	</div>

	<footer class="px-2 text-xs text-gray-500">
		<p>© 2026 Marit van der Loos</p>
	</footer>
</aside>
