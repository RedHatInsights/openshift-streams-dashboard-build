"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[4309],{94309:e=>{e.exports=JSON.parse('{"client_connections":"Client connections","client_connections_value":"up to 500","clientID":"Client ID","connection_rate":"Connection rate","connection_rate_value":"up to 100 connections/second","connection_tab":{"authentication_method":"Authentication method","bootstrap_server":"Bootstrap server","bootstrap_server_description":"Establish the initial connection between your client and Kafka instance.","create_service_account_to_generate_credentials":"Create a service account to generate credentials. Manage the service accounts you create on the <value>Service Accounts</value> page.","current_instance":"Accounts do not have access to this instance unless granted under the instance’s <value>Access tab</value>. The owner, the organization administrator, or users with the Allow Alter permission on this instance can manage access.","drawer_resource_tab_body_description_1":"Your application or tool initially connects to the Kafka instance using the bootstrap server and authenticates with your service account credentials. You can also access the Kafka instance by calling the REST API using a token obtained from Red Hat SSO.","kafka_instance_url_button_aria_label":"More information about the URL for Kafka Instance API","kafka_instance_url_description":"Configure topics, consumer groups, and access for this Kafka instance.","kafka_instance_url_label":"URL for Kafka Instance API","kafka_instance_url_popover_body":"Use the REST API URL to connect to this Kafka instance to manage topics, consumer groups, and access.","kafka_instance_url_popover_label":"URL for Kafka Instance API","kafka_management_button_aria_label":"More information about the URL for Kafka Management API","kafka_management_description":"Manage Kafka instances and service accounts, and access metrics.","kafka_management_popover_body":"Use the REST API URL to connect to manage Kafka instances and service accounts, and to access metrics.","kafka_management_popover_header":"URL for Kafka Management API","kafka_management_url":"URL for Kafka Management API","more_info_about_sasl_oauthbearer":"More information about SASL/OAUTHBEARER","recommended":"Recommended","rest_api_description":"Streams for Apache Kafka provides two REST APIs, one for accessing the Kafka instance and one for managing resources such as Kafka instances and services accounts.","rest_api_header":"REST APIs","sasl_oauthbearer":"SASL/OAUTHBEARER","sasl_oauthbearer_description":"Use your service account credentials and a token endpoint URL to authenticate your client with the Kafka instance.","sasl_oauthbearer_popover_content":"OpenShift Streams for Apache Kafka uses the industry-standard OAuth protocol via the SASL/OAUTHBEARER provided by Apache Kafka.","sasl_plain":"SASL/PLAIN","sasl_plain_description":"Use your service account credentials (Client ID and Client secret) as the user name and password to authenticate your client with the Kafka instance.","token_endpoint_url":"Token endpoint URL"},"consumerGroup":{"active_members":"Active members","active_members_for_topic":"Active members for this topic","client_id":"Client ID","consumer_group_id":"Consumer group ID","consumer_group_info_table_aria":"table for consumer group details","consumer_group_list":"Consumer group list","consumer_group_search":"Search consumer group button","consumer_group_search_input":"Consumer group search input","consumer_groups":"Consumer groups","consumer_id":"Consumer ID","consumergroup_successfully_deleted":"Successfully deleted consumer group {{name}}","current_offset":"Current offset","delete":"Delete consumer group?","delete_consumer_connected_alert_body":"One or more members are currently connected to a topic. All members of a consumer group that are connected to topic must be disconnected before deleting the consumer group.","delete_consumer_connected_alert_title":"The {{name}} consumer group cannot be deleted at this time","empty_consumer_body":"When configuring an application client to access Kafka, assign a group ID to associate the consumer with a consumer group.","empty_consumer_title":"No consumer groups","empty_list":"No consumer groups yet","log_end_offset":"Log end offset","member_id":"Member ID","new_offset":"New offset","no_result":"No consumer groups found","offset_lag":"Offset lag","offset_successfully_reset":"offsets for the consumer group have been successfully reset","partition":"Partition","partitions_with_lag":"Partitions with lag","partitions_with_lag_description":"Partitions with lag shows the number of partitions where the assigned consumer has not caught up with the last message in the partition. The offset lag of a partition reflects the current offset position of a consumer in relation to the end of the partition log. Use this number to identify any delay in the consumption of messages. To reduce consumer lag, you typically add new consumers to a group.","partitions_with_lag_for_topic":"Partitions with lag in this topic","partitions_with_lag_name":"Partitions with lag","reset_offset":"Reset offset","reset_offset_accept":"I understand that by resetting the offset position, I risk clients skipping or duplicating messages.","reset_offset_connected_alert_body":"One or more members of the consumer group are currently connected to a topic. All members of a consumer group must be disconnected before resetting the offset.","reset_offset_connected_alert_title":"The offset for this consumer group cannot be reset at this time","search":"Search consumer groups","state":{"completing_rebalance":"Completing rebalance","dead":"Dead","empty":"Empty","preparing_rebalance":"Preparing rebalance","stable":"Stable","unknown":"Unknown"},"state_header":"State","topic_table_aria":"table for consumer groups by topic","unassigned":"unassigned","uncosumed_partitions":"Unconsumed partitions","uncosumed_partitions_for_topic":"Unconsumed partitions for this topic","view_partitions_offsets":"View partition offsets"},"duration":"Duration","duration_value":"48 hours","egress":"Egress","egress_value":"up to 30 MiB/second each","filter_by_client_id":"Filter by Client ID","filter_by_owner":"Filter by owner","filter_by_short_description":"Filter by short description","ingress":"Ingress","ingress_egress":"Ingress/Egress","ingress_value":"up to 30 MiB/second each","input_field_invalid_message":"Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - ).","max_filter_message":"Maximum number of filters reached. Clear a filter before adding another.","message_size":"Message size","message_size_value":"up to 1 MiB","owner":"Owner","owner_field_invalid_message":"Red Hat Login ID cannot contain spaces, national characters or the following special characters \\" $ ^ < > | + % / ; : , * = ~ # ( )","partitions":"Partitions","partitions_value":"up to 500","select_filter_category":"Select filter category","short_description":"Short Description","storage":"Storage","storage_value":"up to 1000 GiB","topic":{"topic":"Topic"},"will_expire":"This trial instance will expire in <time>{{time}}</time>"}')}}]);