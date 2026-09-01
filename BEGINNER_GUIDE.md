# The White Thread Series
## Beginner guide: publish, connect GoDaddy, and edit the website

This guide assumes you have **zero website experience**. The recommended setup is:

| Part | Recommended service | Cost | What it does |
|---|---|---:|---|
| Domain name | GoDaddy | Paid yearly domain fee | Gives you your own address, such as `yourpenname.com` |
| Website files | GitHub | Free | Stores your editable website files online |
| Hosting | Netlify Free plan | Free for a small static site | Turns the GitHub files into your live website |
| Editing | GitHub in your browser | Free | Lets you replace images, edit links, and change text without installing coding software |

This route is free apart from the GoDaddy domain and is suitable for a single author website. Netlify can publish an existing project from a remote Git repository, and GitHub lets you upload files directly in your browser.[1] [2]

> **Simple explanation:** GitHub is the cupboard holding your website files. Netlify is the place that displays those files to visitors. GoDaddy is the address pointing people to Netlify.

## Before you begin

Keep these three things ready:

1. Your GoDaddy account and the domain name you want to buy.
2. The website project download from the Manus project screen. Download the complete project ZIP rather than copying only the preview URL.
3. Your final images, such as the book cover, Xal and Kian art, and author image.

For the easiest first launch, do not rename folders or files inside the downloaded project. If the project screen offers **Download ZIP**, use that option.

## Step 1 — Download your website project

Open the project’s **Code** or **More** menu in the Manus project screen and choose **Download as ZIP**. Save the ZIP file somewhere easy to find, such as your Desktop or Downloads folder.

Create a new folder on your computer called `white-thread-series`. Right-click the downloaded ZIP file and choose **Extract All** or **Unzip**. You should see folders such as `client`, `server`, and files such as `package.json`.

Do not delete the `client` folder. The visible website is inside it.

### Important image note

The current Manus version uses persistent Manus-hosted image URLs for the atmospheric background and author portrait. Those URLs work with this Manus project. If you move the project entirely to another host, the safest portable setup is to download your final images, place them in a folder such as `client/public/images`, and update the image paths in the source. If you want, this can be prepared for you as a separate portable-image version before you upload it elsewhere.

## Step 2 — Create a free GitHub account

Go to [github.com](https://github.com/) and select **Sign up**. Use an email address you can access. Choose a username that you will recognize; visitors will not need to see or use this username.

After signing in, select the **+** button in the top-right corner and choose **New repository**.

Use these settings:

| Setting | What to choose |
|---|---|
| Repository name | `white-thread-series` |
| Description | `The White Thread Series author website` |
| Visibility | **Public** |
| Add a README file | Leave unchecked for now |

Select **Create repository**.

## Step 3 — Upload the website files to GitHub

Open the new empty repository. Select **Add file**, then **Upload files**. GitHub’s official browser upload flow is: open the repository, choose **Add file → Upload files**, drag in the files or folder, enter a commit message, and save the changes.[2]

Open the unzipped `white-thread-series` folder on your computer. Select everything inside that folder and drag it into the GitHub upload area. Upload the contents of the project, not an extra folder wrapped around them.

In the commit message box, type:

`Upload The White Thread Series website`

Choose **Commit directly to the main branch**, then select **Commit changes**.

GitHub’s browser upload limit is 25 MiB per file, and you can upload up to 100 files at once.[2] If GitHub rejects a very large image, resize that image first or ask for a smaller web version.

## Step 4 — Put the website on Netlify for free

Go to [app.netlify.com](https://app.netlify.com/) and sign up using the same GitHub account. When Netlify asks for permission to access GitHub, allow it so Netlify can read your website files and automatically publish future edits.

In Netlify:

1. Select **Add new project** or **Add new site**.
2. Choose **Import an existing project**.
3. Choose **GitHub**.
4. Select the `white-thread-series` repository.
5. Netlify may detect the project settings automatically. If it asks for a build command, use `pnpm build`. If it asks for a publish directory, use `dist/public`.
6. Select **Deploy**.

After deployment, Netlify gives you a temporary web address ending in `netlify.app`. Open it in a new browser tab and check the page.

If the temporary page is blank, do not panic. The most common cause is an incorrect build setting. Send the Netlify error message to me, and I can tell you exactly what to change.

### An even simpler first test

Netlify also supports a drag-and-drop publisher. You can sign in, open [Netlify Drop](https://app.netlify.com/drop), and drag in the project folder or its output folder. Netlify’s documentation says a project folder can be dropped directly, and later updates can be uploaded again from the site’s **Deploys** page.[1]

However, **GitHub + Netlify is better for you long term** because every change you save in GitHub can automatically trigger a new Netlify deployment.

## Step 5 — Choose your Netlify site name

In the Netlify site dashboard, find the temporary `netlify.app` address and choose **Customize** or **Change site name**. Pick something simple, such as:

`white-thread-series.netlify.app`

This address is temporary and free. Your GoDaddy domain will become the public address later.

## Step 6 — Connect your GoDaddy domain

First, buy your domain from GoDaddy. Then in Netlify open your site and go to:

**Domain management → Add a domain**

Enter your full domain name, such as `www.yourdomain.com`, and follow Netlify’s instructions. Netlify will show the exact DNS records it wants you to add. Keep that Netlify page open while working in GoDaddy.

In GoDaddy:

1. Sign in and open your **Domain Portfolio**.
2. Select your domain.
3. Select **DNS**.
4. Select **Add New Record**.
5. Choose the record type Netlify requested.
6. Copy the **Name**, **Value**, and any other details from Netlify exactly.
7. Select **Save**.

For a typical `www` connection, GoDaddy describes a CNAME as using `www` in the Name field and a destination in the Value field. GoDaddy also notes that DNS changes often take effect within an hour but can take up to 48 hours worldwide.[3]

Do not guess the DNS value. Use the exact value Netlify gives you. DNS mistakes do not usually damage your domain, but they can prevent the website from loading until corrected.

Back in Netlify, select **Verify DNS configuration** or **Check DNS configuration**. When verification succeeds, enable HTTPS if Netlify offers the option. Your site should then work with `https://`.

## Step 7 — Make future edits without coding software

Your normal editing process will be:

1. Open the website repository on GitHub.
2. Find the file you want to change.
3. Select the pencil icon to edit it in the browser.
4. Make one small change.
5. Select **Commit changes**.
6. Wait a minute or two for Netlify to publish the new version.
7. Refresh your website using a private/incognito browser window if the old version still appears.

The main page content is in:

`client/src/pages/Home.tsx`

The design and layout are in:

`client/src/index.css`

The browser title is in:

`client/index.html`

### Changing a link

Inside `Home.tsx`, links are grouped near the top in a section called `LINKS`. When you receive your Amazon, signed-paperback, TikTok, or Instagram URLs, replace only the text inside the quotation marks.

For example:

```ts
amazonEbook: "PASTE YOUR AMAZON EBOOK LINK HERE",
```

Do not remove the quotation marks or the comma at the end of the line.

### Adding a new image

For a portable external-host version, place the image inside:

`client/public/images`

Then use a path like this in the page:

```tsx
<img src="/images/book-cover.jpg" alt="Front cover of Till the Day We Can" />
```

Use short file names with no spaces, such as:

- `book-cover.jpg`
- `xal-renharth.jpg`
- `kian-vaeloren.jpg`
- `pahadina-author.jpg`

Always include useful `alt` text so visitors using screen readers understand what the image shows.

### Changing text

Edit only the words inside the relevant paragraph or heading. Keep the surrounding `<p>`, `<h1>`, `<h2>`, and `</...>` symbols in place. If you are nervous, make one change at a time and commit it with a message such as:

`Update author bio`

If the site breaks, Netlify shows the failed deployment. GitHub also keeps the previous saved version, so the change can be corrected or reverted.

## Your safest editing routine

Before every edit, copy the old paragraph into a private note. Change one section only. Save it. Open the live site. If it looks correct, continue with the next change.

Avoid changing several files at once until you are comfortable. Never paste passwords, API keys, or private account information into GitHub. GitHub specifically warns against committing secrets such as passwords or API keys.[2]

## What you will and will not pay for

You pay GoDaddy for the domain registration and renewal. GitHub and Netlify can host this small static website on their free options, subject to each service’s current limits and policies. You do not need to purchase GoDaddy web hosting for this setup.

You also do not need a separate database, online store, or paid website builder for the current page. The Amazon buttons can remain inactive until you have the correct links.

## If you want the easiest possible version

If GitHub feels too difficult, the easiest temporary route is **Netlify Drop**: download the project, open Netlify Drop, and drag in the folder.[1] The disadvantage is that every future edit requires downloading or rebuilding the project and dragging it again. For your goal of changing images and links over time, **GitHub + Netlify is the better beginner workflow**.

## Recommended next action

Do not start by buying extra hosting. First, download the project ZIP and create the GitHub repository. Once the temporary Netlify address works, buy the GoDaddy domain and connect it. If you would like, I can also prepare a **portable ZIP with all images stored locally**, which will make the GitHub upload and future image editing simpler.

## References

[1]: https://docs.netlify.com/welcome/add-new-site/ "Netlify — Choose your path / deploy from files or a remote Git repository"

[2]: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository "GitHub Docs — Adding a file to a repository"

[3]: https://www.godaddy.com/help/add-a-cname-record-19236 "GoDaddy Help — Add a CNAME record"
