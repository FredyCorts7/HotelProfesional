<?php
    class Login extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function login() {
            $this->view->render($this, 'login');
        }
    }