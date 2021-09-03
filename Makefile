setup:
	@echo "========== Start installing dependencies =========="

	cd Server && yarn && docker build -t "express_server" .
	cd WebApp && yarn && docker build -t "web_app" .
	
	@echo "========== Environment is ready! App is running! =========="

start:
	@echo "========== Start running app =========="

	docker-compose up

	
cleanup:
	docker-compose down
	docker rmi -f $$(docker images -a -q)