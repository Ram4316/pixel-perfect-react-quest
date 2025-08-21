# Git Workflow Guide for Codespace Development

## 🔍 Issue: Local Changes Not Appearing in GitHub Repository

If your changes from GitHub Codespace through VS Code aren't appearing in the GitHub repository, this guide will help you troubleshoot and resolve the issue.

## 📋 Quick Diagnosis Checklist

Run these commands in your Codespace terminal to diagnose the issue:

```bash
# 1. Check current git status
git status

# 2. Check which branch you're on
git branch

# 3. Check remote repository URL
git remote -v

# 4. Check if there are uncommitted changes
git diff

# 5. Check commit history
git log --oneline -5
```

## 🔧 Common Issues & Solutions

### Issue 1: Changes Not Committed Locally

**Symptoms:**
- You made changes in VS Code
- Files show as modified in Git panel
- Changes don't appear on GitHub

**Solution:**
```bash
# 1. Stage your changes
git add .
# Or stage specific files
git add path/to/your/file.js

# 2. Commit your changes with a descriptive message
git commit -m "Add feature: describe what you changed"

# 3. Push to remote repository
git push origin your-branch-name
```

### Issue 2: Changes Committed But Not Pushed

**Symptoms:**
- Changes are committed locally
- Local git log shows your commits
- GitHub repository doesn't show the commits

**Solution:**
```bash
# Check if you have unpushed commits
git log origin/main..HEAD

# Push your commits to the remote repository
git push origin your-branch-name

# If you're on main branch
git push origin main
```

### Issue 3: Working on Wrong Branch

**Symptoms:**
- Changes are committed and pushed
- They appear on a different branch than expected
- Main branch doesn't show your changes

**Solution:**
```bash
# Check which branch you're on
git branch

# Switch to the correct branch
git checkout main
# Or create and switch to a new branch
git checkout -b feature/your-feature-name

# If you need to move commits to the correct branch
git cherry-pick commit-hash
```

### Issue 4: Authentication Issues

**Symptoms:**
- Error messages about permissions when pushing
- "Authentication failed" errors
- Push commands are rejected

**Solution:**
```bash
# Check your Git configuration
git config --global user.name
git config --global user.email

# Set your Git credentials if not set
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# For GitHub authentication in Codespace
gh auth login
```

### Issue 5: Codespace Sync Issues

**Symptoms:**
- VS Code shows files as saved
- Terminal git status shows no changes
- File changes seem to disappear

**Solution:**
1. **Manual Refresh:**
   ```bash
   # Refresh file system
   ls -la
   
   # Check git status
   git status --porcelain
   ```

2. **VS Code Sync:**
   - Use `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Developer: Reload Window"
   - Press Enter

3. **Force File Check:**
   ```bash
   # Check for unstaged changes
   git diff
   
   # Check for staged changes
   git diff --cached
   ```

## 🔄 Proper Git Workflow for Codespace

### 1. Start Your Work Session
```bash
# Pull latest changes
git pull origin main

# Create a new feature branch (recommended)
git checkout -b feature/your-feature-name

# Or continue on existing branch
git checkout your-existing-branch
```

### 2. Make Your Changes
- Edit files in VS Code
- Save files (Ctrl+S or Cmd+S)
- Verify changes in terminal: `git status`

### 3. Stage and Commit Changes
```bash
# Check what files changed
git status

# Stage all changes
git add .

# Or stage specific files
git add src/components/MyComponent.tsx

# Commit with a descriptive message
git commit -m "Add user authentication feature

- Implement login form validation
- Add JWT token handling
- Update user interface for auth states"
```

### 4. Push Changes to GitHub
```bash
# Push to remote repository
git push origin feature/your-feature-name

# If it's the first push of a new branch
git push -u origin feature/your-feature-name
```

### 5. Create Pull Request
1. Go to your GitHub repository
2. Click "Compare & pull request"
3. Fill in PR description
4. Submit for review

## ⚙️ Codespace-Specific Configuration

### VS Code Git Settings

Add these to your VS Code settings in Codespace:

```json
{
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  "git.autorefresh": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

### Recommended Codespace .devcontainer Configuration

Create `.devcontainer/devcontainer.json`:

```json
{
  "name": "React Development",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-vscode.vscode-typescript-next",
        "ms-vscode.vscode-eslint",
        "ms-vscode.vscode-git-graph",
        "eamodio.gitlens"
      ],
      "settings": {
        "git.enableSmartCommit": true,
        "git.autofetch": true
      }
    }
  },
  "postCreateCommand": "npm install"
}
```

## 🚀 Best Practices

### 1. Branch Naming Convention
```bash
# Feature branches
git checkout -b feature/user-authentication
git checkout -b feature/payment-integration

# Bug fixes
git checkout -b bugfix/login-validation-error
git checkout -b hotfix/security-vulnerability

# Documentation
git checkout -b docs/api-documentation
```

### 2. Commit Message Best Practices
```bash
# Good commit messages
git commit -m "Add user authentication with JWT tokens"
git commit -m "Fix: Resolve login form validation error"
git commit -m "Update: Improve error handling in API calls"

# Avoid vague messages
git commit -m "fix stuff"
git commit -m "update"
git commit -m "changes"
```

### 3. Regular Syncing
```bash
# Before starting work
git pull origin main

# Periodically during work
git fetch origin
git rebase origin/main  # If on feature branch

# Before pushing
git pull origin your-branch-name
git push origin your-branch-name
```

## 🔍 Debugging Commands

### Check File Status
```bash
# See all file statuses
git status --porcelain

# See changes in files
git diff

# See staged changes
git diff --cached

# Check specific file
git status path/to/file.js
```

### Check Repository State
```bash
# See remote repository info
git remote show origin

# Check branch tracking
git branch -vv

# See commit history with graph
git log --oneline --graph --all -10
```

### Verify Push Success
```bash
# Check if local commits exist on remote
git log origin/your-branch-name..HEAD

# This should be empty after successful push
```

## 📞 Getting Help

If you're still having issues:

1. **Check Codespace Status:**
   - Is your Codespace running properly?
   - Are there any error messages in the terminal?

2. **Verify Repository Access:**
   - Can you see the repository on GitHub?
   - Do you have write permissions?

3. **Test Basic Git Operations:**
   ```bash
   # Test repository connectivity
   git fetch origin
   
   # Test authentication
   gh auth status
   ```

4. **Contact Support:**
   - Repository issues: Open a GitHub issue
   - Codespace issues: Contact GitHub support
   - Git workflow questions: Check GitHub documentation

## 📖 Additional Resources

- [GitHub Codespace Documentation](https://docs.github.com/en/codespaces)
- [Git Documentation](https://git-scm.com/doc)
- [VS Code Git Integration](https://code.visualstudio.com/docs/editor/versioncontrol)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

---

**Remember:** Always commit early and often, use descriptive commit messages, and push your changes regularly to avoid losing work!