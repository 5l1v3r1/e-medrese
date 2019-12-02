hugo
git add -A

msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

git commit -m "eklemeler"
git push -f origin master
rm -rf docs
