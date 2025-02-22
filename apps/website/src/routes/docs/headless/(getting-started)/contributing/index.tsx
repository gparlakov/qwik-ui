import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <article class="max-w-prose">
      <h1 class="text-xl">Contributing </h1>
      <p class="mb-6 text-lg">
        We welcome and appreciate contributions from the community! Whether you're looking
        to submit bug fixes, improve documentation, or add new features, your efforts can
        make a significant impact on the project. By contributing, you'll also be joining
        our vibrant and supportive community of developers.
      </p>

      <p class="mb-6 text-lg">
        Our team will review your pull request and, if approved, merge it into the main
        repository.
      </p>

      <section class="flex flex-col">
        <a
          class="border-none"
          href="https://github.com/qwikifiers/qwik-ui/blob/main/CONTRIBUTING.md"
          target="_blank"
        >
          <h3 class="mb-4 inline-block text-2xl font-semibold underline">
            Read our contributing guidelines
          </h3>
        </a>

        <a class="border-none" href="https://discord.gg/PVWUUejrez" target="_blank">
          <h3 class="mb-4 inline-block text-2xl font-semibold underline">
            Join Our Discord Community
          </h3>
        </a>
      </section>
    </article>
  );
});

export const head: DocumentHead = {
  title: 'QwikUI - Contributing',
};
