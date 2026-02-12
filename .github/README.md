# Website

Vegas Technologies is an IT company based in Las Vegas that has involvement in various IT roles across the nation.

# Development Installation

This project is hosted by GitHub Pages and utilizes Jekyll for templating.
For local development, clone this repo, checkout your relevant branch, and follow these steps:

1)  Install Ruby for development  
    For example: `sudo apt-get install ruby-dev`  
    Modify your PATH variable to include ruby binaries  
    e.g. `export PATH="$HOME/.local/share/gem/ruby/3.0.0/bin:$PATH"`  
    Your ruby version and folder structure may be different.  
    In `~/.gemrc`, add this line: `gem: --user-install --no-document`  
    > `--user-install`: Specifies to not install ruby libraries in root folders which may require sudo permission. Avoid installing code with sudo unless you know what you're doing.
    >
    > `--no-document`: *[Optional]* Disable generating documentation to speed up installation.

2)  Install development gems for bundler and github pages  
    `gem install bundler github-pages`
    Include an environment variable for `bundle`. This will be the same folder as for Ruby in Step 1, not including the versioned folder:  
    e.g. `export BUNDLE_PATH="$HOME/.local/share/gem/ruby"`

3)  In the project directory, to start a development server, run `bundle exec jekyll serve`  
    > This will run by default at `http://localhost:4000`

    Self-signed SSL files for local HTTPS hosting are included at `/ssl`  
    They are generated for the domain names `local.vegastechs.com` and `local.api.vegastechs.com`  
    No separate API is currently being used so the second domain name is not being used.  
    You may generate your own self-signed certificates for your own development environment. These are provided for convenience.  
    You may host these domains with a reverse proxy server such as Nginx or Apache.  
    Given you've set one up, to run an HTTPS server, use this command: `bundle exec jekyll serve --ssl-key ssl/local.vegastechs.com.key --ssl-cert ssl/local.vegastechs.com.crt`  
    Your browser may need your SSL certificate .crt/.cert file imported in order to be recognized.  
    This will likely be in the Settings page and in security settings.  
    Steps for each browser may vary.  
