docker build -t fabiolux/constructoitfront .
PAUSE
docker push fabiolux/constructoitfront
PAUSE
kubectl rollout restart deployment/appfront
PAUSE