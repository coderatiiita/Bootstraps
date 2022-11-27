# one click push
git add .;
git commit -m "Yet Another commit";
git push origin master;

# Reset git modules
git clean -xfd;
git submodule foreach --recursive git clean -xfd;
git reset --hard;
git submodule foreach --recursive git reset --hard;
git submodule update --init --recursive;
git secret reveal;

# Fork up-to-date
cd into/cloned/fork-repo;
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git;
git fetch upstream;

# Updating your fork from original repo to keep up with their changes:
git pull upstream develop

# To reset upstream branch
git reset --hard upstream/develop

# Stash changes
git stash 
git stash apply

# Make dev equal to master
git reset --hard master
