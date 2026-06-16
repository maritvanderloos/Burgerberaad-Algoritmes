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
</script>

<aside class="h-auto md:h-screen w-full md:w-52 flex flex-col justify-between bg-white py-6 px-4">
	<div class="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
		<!-- Logo image -->
		<div class="sm:max-w-[480px] max-w-[120px]">
			<img src="/hand.png" alt="Algoritmen & de Overheid" width="500" height="500" />
		</div>

		<!-- Navigation -->
		<nav class="mt-auto text-sm px-2 sm:flex-col flex-row w-full flex gap-4 sm:gap-4 items-center sm:items-start">
			{#each navLinks as link}
				<div class="flex items-center">
					{#if link.href}
						<a
							href={link.href}
							class="block hover:text-blue-600 transition-colors {$page.url.pathname === link.href
								? 'text-blue-600'
								: ''}"
						>
							{link.label[lang.current]}
						</a>
					{:else}
						<div class="select-none text-gray-500 sm:text-sm hidden">{link.label[lang.current]}</div>
					{/if}

					{#if link.sublinks}
						<ul class="mt-0 sm:mt-2 sm:flex-col flex-row w-full flex items-center sm:items-start gap-2">
							{#each link.sublinks as sublink}
								<li>
									<a
										href={sublink.href}
										class="text-gray-800 hover:text-blue-600 transition-colors italic {$page.url.pathname ===
										sublink.href
											? 'text-blue-600'
											: ''}"
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

	<!-- Footer -->
	<footer class="hidden md:block text-gray-500 text-xs px-2">
		<p>© 2026 Marit van der Loos</p>
	</footer>
</aside>
