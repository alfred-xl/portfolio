<?php
// Include the wp-config.php file to get the database credentials
require_once '../wp-config.php';

// Include wp-load.php to use WordPress functions
require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');

// Function to get active group for a user 
function get_active_group_for_user($email) {
    if (empty($email)) return [];

    // Retrieve the user by email
    $user = get_user_by('email', $email);

    // Check if the user exists
    if (!$user) {
        return ['error' => 'User not found'];
    }

    $user_id = intval($user->ID);

    $endpoint_url = 'https://discovertao.com.ng/wp-json/buddyboss/v1/groups/30/members/';


// Check if the 'email' parameter is provided in the request
if (!isset($_GET['email'])) {
    echo json_encode(['error' => 'email parameter is required']);
    exit;
}

// Get the 'email' parameter from the request
$email = $_GET['email'];

// Get the list of active group for the given user
$active_group= get_active_group_for_userr($email);

// Return the result as JSON
header('Content-Type: application/json');
echo json_encode($active_group);

