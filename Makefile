setup:
	@echo "========== Start installing dependencies =========="

	cd Server && yarn && docker build -t "express_server" .
	cd WebApp && yarn && docker build -t "web_app" .
	docker-compose down

	@echo "========== Environment is ready! Run make run to start local development =========="
	
run:
	@echo "========== Start running server =========="
	
	docker-compose up

cleanup:
	docker-compose down
	docker rm $$(docker ps -a -f status=exited -q)
	docker rmi $$(docker images -a)
	rm -rf .pgdata