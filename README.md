# React starter workshop

A starter project to learn React from the very basic to advance concepts.

Discord server: https://discord.gg/ssCPXtqfUw

# How to start

## Prerequisite

### Install development environment

For Windows user, open powershell and run these commands

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

After that, `scoop` will be accessible via the powershell

```
scoop install git nodejs-lts
scoop bucket add extras
scoop install vscode
```

### Manually downloads

If you don't like scoop, which you shouldn't IMO, or already have some of these dependencies installed, you can manually download and install them manually on your own

- VSCode: https://code.visualstudio.com/
- Git: https://git-scm.com/downloads
- NodeJS: https://nodejs.org

## Clone the repository

```
git clone https://github.com/pvtri96/react-starter

cd react-starter
npm install
```

**Note**: The link should be replaced with your forked repository in case you fork it.

# Navigating with in the repository

The workshop takes advantages of what git has to offer, by using multiple branches for each section. The unit tests will be provided for each section so that the learner can simply execute the test command to check whether his/her work has already satisfied the section's requirement.

These branches consist of:

- `main`: where the foundation of the workshop are located. You should be able to find every single documentation related to the workshop here.

* `learn/{day_number}/{section}`: is the starting point of a specific section provided by the trainer.
