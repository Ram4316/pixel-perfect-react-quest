#!/bin/bash

# Git Troubleshooting Script for Codespaces
# This script helps diagnose common Git workflow issues

echo "🔍 Git Troubleshooting Script for Codespaces"
echo "============================================="
echo ""

# Function to print section headers
print_section() {
    echo ""
    echo "📋 $1"
    echo "----------------------------------------"
}

# Function to run command and show output
run_command() {
    echo "$ $1"
    eval "$1"
    echo ""
}

print_section "1. Basic Git Status"
run_command "git status"

print_section "2. Current Branch Information"
run_command "git branch -vv"

print_section "3. Remote Repository Information"
run_command "git remote -v"

print_section "4. Recent Commit History"
run_command "git log --oneline -5"

print_section "5. Unstaged Changes"
run_command "git diff --name-only"

print_section "6. Staged Changes"
run_command "git diff --cached --name-only"

print_section "7. Unpushed Commits"
CURRENT_BRANCH=$(git branch --show-current)
if [ -n "$CURRENT_BRANCH" ]; then
    run_command "git log origin/$CURRENT_BRANCH..HEAD --oneline"
else
    echo "No current branch detected"
    echo ""
fi

print_section "8. Git Configuration"
run_command "git config --global user.name"
run_command "git config --global user.email"

print_section "9. GitHub CLI Authentication Status"
if command -v gh &> /dev/null; then
    run_command "gh auth status"
else
    echo "GitHub CLI (gh) not installed"
    echo ""
fi

print_section "10. Working Directory Status"
run_command "pwd"
run_command "ls -la | head -10"

echo ""
echo "🎯 Next Steps:"
echo "=============="
echo ""
echo "Based on the output above, here are common solutions:"
echo ""
echo "• If you have unstaged changes:"
echo "  git add ."
echo "  git commit -m \"Your commit message\""
echo ""
echo "• If you have unpushed commits:"
echo "  git push origin $CURRENT_BRANCH"
echo ""
echo "• If authentication is needed:"
echo "  gh auth login"
echo ""
echo "• If you need to pull latest changes:"
echo "  git pull origin main"
echo ""
echo "📖 For detailed troubleshooting, see: docs/GIT_WORKFLOW_GUIDE.md"
echo ""