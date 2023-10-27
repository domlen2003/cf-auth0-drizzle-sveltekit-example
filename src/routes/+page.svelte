<script>
	import {signIn, signOut} from "@auth/sveltekit/client"
	import {page} from "$app/stores"
</script>

<h1 class="text-center font-bold text-2xl pb-2">SvelteKit Auth Example</h1>
<div class="w-full h-full flex flex-col items-center space-y-2">
    {#if $page.data.session}
        {#if $page.data.session.user?.image}
      <span
              style="background-image: url('{$page.data.session.user.image}')"
              class="avatar"
      />
        {/if}
        <span class="signedInText">
      <small>Signed in as</small><br/>
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
        <button on:click={async() => await signOut({redirect: false})} class="button">Sign out</button>
    {:else}
        <span class="notSignedInText">You are not signed in</span>
        <button class="p-2 bg-green-300 rounded-md" on:click={() => signIn("auth0")}>Sign In</button>
    {/if}
</div>